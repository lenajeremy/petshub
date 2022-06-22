import localStore from "./asyncstorage";
import { useAppDispatch } from "../redux/store";
import { likePet, dislikePet } from '../redux/store'
import AsyncStorage from "@react-native-async-storage/async-storage";



/******* FUNCTION FOR LIKING AND UNLIKING PETS **********/

export const likeOrUnlikePets = async (dispatch: ReturnType<typeof useAppDispatch>, petname: string): Promise<boolean> => {

    // get all liked pets from the local storage
    const { data } = await localStore.get<string[]>(localStore.FAV_PET_KEY, []);

    let liked = false;

    if (data) {

        const index = data.indexOf(petname)

        if (index === -1) {
            data.push(petname)
            dispatch(likePet(petname));
            liked = true;
        } else {
            data.splice(index, 1)
            dispatch(dislikePet(petname))
        }

        await localStore.set(localStore.FAV_PET_KEY, data);

    } else {
        await localStore.set(localStore.FAV_PET_KEY, [petname]);
        liked = true;
    }


    return liked;
}
