import React from 'react'

export default function Newsitem(props) {
    return (
        <>
            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-5'>
                <div class="card news-card">
                    <img src={props.pic} class="card-img-top" alt={props.pic}></img>
                    <div class="card-body news-card-body">
                        <h5 class="card-title news-card-title">{props.source}</h5>
                        <p class="card-text news-card-text">
                          <b> {props.date} </b>
                        </p>
                        <hr></hr>
                        <p class="card-text">
                             {props.description}
                        </p>
                        <a href={props.url} class="news-card-text btn btn-primary" target='_blank'>Go to Articles</a>
                    </div>
                </div>
            </div>
        </>
    )
}
