import { Grid } from '@mui/material'
import React from 'react'
import PageHeader from '../components/pageHeader'
import { v4 as uuidv4 } from 'uuid';
import GET_CATEGORIES from '../queries/liste_categorie';
import { useQuery } from '@apollo/client';
import {FaEdit} from 'react-icons/fa'

function Categories() {

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if(loading){
        return <p>Chargement encours...</p>
    }

    if(error){
        console.log(error)
        return <p>Erreur inattendue...</p>
    }
    
    const categories=data?.categories?.data
  return (
    <>
        <PageHeader title={"Gestion des catégories"} /><hr/>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6} key={uuidv4()}>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Libelle</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((categorie)=>(
                                <tr key={uuidv4()}>
                                    <td>{categorie.attributes?.libelle}</td>
                                    <td><a><FaEdit/></a></td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                
            </Grid>
            <Grid item xs={12} lg={6} key={uuidv4()}>
                <div className='form-group'>
                    <label>Libelle</label>
                    <input type="text" className="form-control"/>
                </div>
                <button className='btn btn-primary mt-3'>Enregistrer</button>
            </Grid>
        </Grid>
    </>
  )
}

export default Categories