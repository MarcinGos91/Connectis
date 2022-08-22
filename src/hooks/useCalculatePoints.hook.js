import {useConfig} from './'

const useCalculatePoints = () => {
    const { thresholdOne, thresholdTwo, pointsOverThresholdOne, pointsOverThresholdTwo } = useConfig()

    const calculatePointsOverThreshold = (price, threshold, maxValue, multiplier) => {
        const tempPoints = price - threshold
        if (tempPoints < 0) return 0 
        const totalPoints = tempPoints > maxValue ? maxValue : tempPoints;
        return totalPoints * multiplier;
    }

    const calculatePoints = orders => {
        const thisMonth = new Date().getMonth()

        const points = orders.reduce((acc, current) => {
            const { price, date } = current.attributes
            const orderMonth = new Date(date).getMonth()
            const monthsDifference = thisMonth - orderMonth
            if (monthsDifference > 2) return acc;
            const pointsThresholdOne = calculatePointsOverThreshold(price, thresholdOne, thresholdTwo - thresholdOne, pointsOverThresholdOne)
            const pointsThresholdTwo = calculatePointsOverThreshold(price, thresholdTwo, Number.POSITIVE_INFINITY, pointsOverThresholdTwo)
            const newMonthsPoints = acc[`month${monthsDifference}`] + pointsThresholdOne + pointsThresholdTwo
            return ({...acc, [`month${monthsDifference}`]: newMonthsPoints})
        }, {month0: 0, month1: 0, month2: 0})
        const {month0, month1, month2} = points
        return {...points, total: month0 + month1 + month2}
    }

    return {calculatePoints};
}

export default useCalculatePoints;