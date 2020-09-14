import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetail = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div style={{marginTop:'100px'}}>
            <h1>id:{id}; Food Detail coming soooooon</h1>
        </div>
    );
};

export default FoodDetail;