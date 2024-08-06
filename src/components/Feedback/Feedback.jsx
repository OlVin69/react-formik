 const Feedback = ({values:{good, neutral, bad}, totalFeedback, positive})=> {
    return (
        <div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{totalFeedback}</p>
            <p>Positive:{positive}%</p>
        </div>
    )
}

export default Feedback