import React from "react";

function EditReview({review, handleChangeForm, setShow, updateAll}) {

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
          body: JSON.stringify({
            description: review.description,
            rating: review.rating
          })
        })
        .then(resp => resp.json())
        .then(data => {
          updateAll(data);
        })
        setShow(false)
    };

    const { description, rating } = review

  return (
    <div className="editor">
      <div className="grid1">
        <div className="imageContainer">
          <img src={review.restaurant.image} alt="restaurant"/>
        </div>
      </div>
      <div className="grid2">
        <div className="infoContainer">
          <h1>Edit Review for {review.restaurant.name}</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="description">Describe your experience here:</label>
              <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <br/>
            <div>
              <label htmlFor="rating">Rating:</label>
              <select style={{textAlign: "center"}}
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
            <button type="submit" className="submitButton">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditReview;