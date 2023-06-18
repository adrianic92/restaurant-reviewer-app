import React from "react";

function EditReview({review, handleChangeForm}) {

  function handleInputChange(e) {
    handleChangeForm(e.target.name, e.target.value)
  }

    if (!review) { return null }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(review)
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
        })
        console.log(review)
    };

    const { description, rating } = review

  return (
    <div>
      <h2>Edit Review for {review.restaurant.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Describe your experience here:</label>
          <textarea
            name="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            name="rating"            
            value={rating}
            onChange={handleInputChange}
          >
            <option value="">Select rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditReview;