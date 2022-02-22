import { patchReviewKudos } from "../utils/api";
import { useState } from 'react'

const Kudos = ({kudos, review_id}) => {

    const [kudosChange, setKudosChange] = useState(0);
    const [disable, setDisable] = useState(false)

    const giveKudos = () => {
        setKudosChange((currChange) => currChange + 1)
        patchReviewKudos(review_id, 1).catch((err) => {
            console.log(err)
            setKudosChange((currChange) => currChange - 1);
        })
        setDisable(true)
    }


    const downVote = () => {
        setKudosChange((currChange) => currChange - 1)
        patchReviewKudos(review_id, -1).catch((err) => {
            console.log(err)
            setKudosChange((currChange) => currChange + 1)
        })
        setDisable(true)
    }
    
    return (
        <div className='Kudos' >
        <button disabled={disable} onClick={() => giveKudos()}> ✅  </button>
        <p>{kudos + kudosChange}</p>
        <button disabled={disable} onClick={() => downVote()}> ❌  </button>
        </div>
    )

}

export default Kudos;