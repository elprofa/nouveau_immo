import {gql } from '@apollo/client';

const GET_QUARTER = gql`
query GET_QUARTER{ 
    quartiers{ 
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
export default GET_QUARTER;