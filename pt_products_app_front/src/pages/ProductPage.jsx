import React from 'react'
import { Header } from '../components'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks';

export const ProductPage = () => {
  const { id } = useParams();
  // const { data, isLoading } = useFetch(`products/${id}`);

  return (
    <section className='h-100 w-100'>
      <Header />

      <div className="container my-4 mt-4">
        {
          (true)
            ? (
              <form>
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input type="text" className="form-control" id="Name" aria-describedby="Name" placeholder="Name" />
                  <small id="Name" className="form-text text-muted">Product Name.</small>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="category">Category</label>
                  <input type="text" className="form-control" id="category" placeholder="Category" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            )
            : <h3>Loading...</h3>
        }
      </div>

    </section>
  )
}
