import React from 'react'
import CardMaisonStc from './CardMaisonStc'
import NextLink from "next/link";

function CardMaison(props) {

    let categorie=props.categorie;
    let auteur=props.auteur;
    let quartier=props.quartier;
    let prix=props.prix;
    let image=props.image;
    let id_maison=props.id;

    const url="https://nouveau-immo.vercel.app"

  return (
    <CardMaisonStc className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-grid-lg-3 css-1v3ij5o">
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1o7wmzi div_image" style={{paddingBottom:'15px'}}>
            <img src={url+image[0]?.attributes?.url} alt="img" width="100%" />
            <div className="MuiCardContent-root css-18mhetb">
                <span className="MuiTypography-root MuiTypography-caption css-zo79h9 "><b>publier: </b>{props.date}</span>
                <span className="MuiTypography-root MuiTypography-caption css-zo79h9 " style={{float:"right",fontWeight:"600"}}>{auteur?.attributes?.username}</span>
                <a className="MuiTypography-root MuiTypography-body1 css-j3zsp8 libelle"  style={{marginTop:'15px'}}><NextLink href={"/detail/"+id_maison}>{props.libelle}</NextLink></a>
                <div className="MuiBox-root css-wvigdu" style={{marginTop:"15px"}}>
                    <h5 className="MuiTypography-root MuiTypography-h5 css-17zyeh3 libelle" style={{color:"#3434b3",width:"fit-content",float:"left"}}>{props.prix} FCFA</h5>
                    <span style={{float:"right"}}>{categorie?.attributes?.libelle}</span>
                </div>
            </div>
        </div>
    </CardMaisonStc>

  )
}

export default CardMaison