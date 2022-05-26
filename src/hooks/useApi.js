import React, {useEffect, useState} from 'react';
import { apiBuilder } from "../apiConfig";

const useApi = (entity,lang = 'es',actualPage = 1) => {
    const [values,setValues] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [page,setPage] = useState(actualPage);

    const getData = async () => {
        setLoading(true);
        setError(null);

        const res = await apiBuilder.tryGet(entity,lang, page);

        if(res.lenth ===0){
            setError('Error en la carga de datos');
        } else {
            setValues(res);
        }
        setLoading(false);
    }

    useEffect(() => {
        getData();
    },[page]);

    const [randomValue,setRandomValue] = useState(null);
    const [randomImage,setRandomImage] = useState(null);

    const getRandomValue = () => {
        const randomIndex = Math.floor(Math.random() * values.length);
        if(values.length === 0) {
            return
        } else {
            const selectedValue = values[randomIndex(0,values.length - 1)];
            setRandomValue(selectedValue);
            const backGroundImage = apiBuilder.tryGetImage(
                selectedValue.backdrop_path,
                'backdropLarge'
            );
        }
        setRandomImage(backGroundImage);
    }

    useEffect(() => {
        getRandomValue();
    },[values]);

    return [values, loading, error, randomValue, randomImage];
}

export default useApi;