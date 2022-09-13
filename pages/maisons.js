import React from 'react'
import PageHeader from '../components/pageHeader'
import CardMaison from '../components/CardMaison'
import { Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import {useQuery} from '@apollo/client'
import GET_MAISONS from '../queries/liste_maison'


function Maisons() {

    const { loading, error, data } = useQuery(GET_MAISONS);

    if(loading){
        return <p>Chargement encours...</p>
    }

    if(error){
        return <p>Erreur inattendue...</p>
    }


    const maisons=data?.maisons.data;
    console.log(data);
  return (
    <>
        <PageHeader title={"Maisons disponibles"} />
        <Grid container spacing={0}>
            {
                maisons.map((maison)=>(
                    <Grid item xs={12} lg={3} key={uuidv4()}>
                        <CardMaison 
                        id={maison?.id}
                        categorie={maison?.attributes?.categorie?.data} 
                        image={maison?.attributes?.image?.data} 
                        libelle={maison?.attributes.libelle} 
                        date={maison?.attributes.date_publication} 
                        auteur={maison?.attributes?.users_permissions_user?.data} 
                        prix={maison.attributes.prix} />
                    </Grid>
                ))
            }
        
        </Grid>
    </>
  )
}

export default Maisons