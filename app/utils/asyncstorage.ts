import AsyncStorage from "@react-native-async-storage/async-storage";

const get = async <T>(key: string): Promise<{ data?: T, success: boolean }> => {

    let item;

    try {
        const valueString = await AsyncStorage.getItem(key)
        item = JSON.parse(valueString as string)

        return { data: item as T, success: true }

    } catch (error) {
        console.error(error)
        return { success: false }
    }

}

const set = async (key: string, value: any): Promise<boolean> => {

    let saved: boolean = false;

    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error(e)
        saved = false;
    }

    return saved;
}


const localStore = {
    get,
    set,
    FAV_PET_KEY: 'FAV_PET_KEY'
}

export default localStore

