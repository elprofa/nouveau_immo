import {gql } from '@apollo/client';

const GET_MAISONS = gql`
query GET_MAISONS{ 
        maisons{ 
        data{ 
            id
            attributes{ 
                libelle
                date_publication
                prix
                image{ 
                    data{
                    attributes{
                    url 
                    }
                }
            }
            categorie{ 
          	data{ 
            	attributes{ 
              	libelle
              }
            }
          }
          users_permissions_user{ 
          	data{ 
            	attributes{
                username
              }
            }
          }
        }
    }
}
}
`;
export default GET_MAISONS;