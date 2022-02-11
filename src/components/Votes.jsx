import { patchReviewKudos } from "../utils/api";
import { useState } from 'react'

const Kudos = ({kudos, review_id}) => {

    const [kudosChange, setKudosChange] = useState(0);

    const giveKudos = () => {
        setKudosChange((currChange) => currChange + 1)
        patchReviewKudos(review_id, 1).catch((err) => {
            console.log(err)
            setKudosChange((currChange) => currChange - 1);
        })
    }


    const downVote = () => {
        setKudosChange((currChange) => currChange - 1)
        patchReviewKudos(review_id, -1).catch((err) => {
            console.log(err)
            setKudosChange((currChange) => currChange + 1)
        })
        
    }
    
    return (
        <div className='Kudos' >
        <button onClick={() => giveKudos()}> ✅  </button>
        <p>{kudos + kudosChange}</p>
        <button onClick={() => downVote()}> ❌  </button>
        </div>
    )

}

export default Kudos;