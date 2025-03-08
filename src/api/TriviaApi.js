
export function getTriviaQuestions({ amount, category, difficulty, type }) {
    const response = fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
    const data = response.json()
    return data.results
}