

export default async function getTriviaQuestions({ amount, category, difficulty, type }) {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
    const data = await response.json()
    return data.results
}