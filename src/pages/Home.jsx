import React from 'react'
import { Forms } from "../components/Forms";

export const Home = () => {
    return (
        <div>
            <Forms title={"Decimal to Binary"} id={"decimal"} />
            <Forms title={"Text to Binary"} id={"text"} />
        </div>
    )
}
