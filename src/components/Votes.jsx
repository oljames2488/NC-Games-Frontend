import { patchReviewKudos } from "../utils/api";
import { useState } from 'react'

const Kudos = ({kudos, review_id}) => {

    const [kudosChange, setKudosChange] = useState(0);

    // need conditional logic for one button that shows live vote 

    const giveKudos = () => {
        setKudosChange((currChange) => currChange + 1)
        patchReviewKudos(review_id).catch((err) => {
            setKudosChange((currChange) => currChange - 1);
        })
    }

    const [downvoteChange, setDownvoteChange] = useState(0);

    const downVote = () => {
        setDownvoteChange((currChange) => currChange - 1)
        patchReviewKudos(review_id).catch((err) => {
            setDownvoteChange((currChange) => currChange + 1)
        })
        
    }
    
    return (
        <>
        <button onClick={() => giveKudos()}> ✅ {kudos + kudosChange} </button>
        <button onClick={() => downVote()}> ❌ { kudos + downvoteChange} </button>
        </>
    )

}

export default Kudos;