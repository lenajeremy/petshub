import AsyncStorage from "@react-native-async-storage/async-storage";


const get = async <T>(key: string, defaultData?: T): Promise<{ data?: T, success: boolean }> => {

    let item;

    try {
        const valueString = await AsyncStorage.getItem(key) as string;
        item = JSON.parse(valueString)

        if (item !== null) return { data: item as T, success: true }

    } catch (error) {
        console.error(error)
    }

    return { success: false, data: defaultData }
}

const set = async<T> (key: string, value: T): Promise<boolean> => {

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

