import {gql } from '@apollo/client';

const GET_CATEGORIES = gql`
query GET_CATEGORIES{ 
    categories{ 
      		data{ 
          	id 
            attributes{ 
            	libelle
              code
            
            }
          }
      }
}
`;
export default GET_CATEGORIES;