export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_NAVIGATION = 'DATA_NAVIGATION';

//Import the sample data
import Data from '../instructions.json';
import DataNavigation from '../navigation.json';


export function getNavigation(){
    return (dispatch) => {
        const dataNavigation  = DataNavigation.navigationAfterLogin;
        dispatch({type: DATA_NAVIGATION, dataNavigation: dataNavigation});
    };
}
 
export function getData(){
    return (dispatch) => {
        //Make API Call, For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const dataInstructions  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, dataInstructions: dataInstructions});
        }, 2000);
    };
}
