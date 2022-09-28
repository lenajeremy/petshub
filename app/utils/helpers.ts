import localStore from "./asyncstorage";
import { useAppDispatch } from "../redux/store";
import { likePet, dislikePet } from '../redux/store'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pets } from "../api/petsApi";



/******* FUNCTION FOR LIKING AND UNLIKING PETS **********/

export const likeOrUnlikePets = async (dispatch: ReturnType<typeof useAppDispatch>, pet: Pets): Promise<boolean> => {

    // get all liked pets from the local storage
    const { data } = await localStore.get<Pets[]>(localStore.FAV_PET_KEY, []);

    let liked = false;

    if (data) {

        const index = data.findIndex(_pet => _pet.name === pet.name);


        if (index === -1) {
            data.push(pet)
            dispatch(likePet(pet));
            liked = true;
        } else {
            data.splice(index, 1)
            dispatch(dislikePet(pet))
        }

        await localStore.set(localStore.FAV_PET_KEY, data);

    } else {
        await localStore.set(localStore.FAV_PET_KEY, [pet]);
        liked = true;
    }


    return liked;
}
