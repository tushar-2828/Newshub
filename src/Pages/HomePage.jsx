import React, { useEffect, useState } from 'react'
import Newsitem from '../compenents/Newsitem'
import { useSearchParams } from 'react-router-dom'

export default function HomePage() {

  let [articles, setArticles] = useState([])
  let [totalResult, setTotalResults] = useState([0])



  let [q, setQ] = useState("")
  let [Language, setLanguage] = useState("")
  let [searchParams] = useSearchParams()



  useEffect(() => {

    setQ(searchParams.get("q") ?? "All")
    setLanguage(searchParams.get("Language") ?? "en")

  }, [searchParams])


  async function getFetchApi() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${Language}&from=2025-11-03&sortBy=publishedAt&apiKey=0553afd6ca8249fe86a82a238c0ba36a`)
    response = await response.json()
    console.log(response)

    if (response.status === "ok") {
      setArticles(response.articles)
      setTotalResults(response.totalResult)
    }

  }

  useEffect(() => {

    getFetchApi();

  }, [q, Language])



  return (
    <>
      <h3 className='text-center' style={{ backgroundColor: "green", padding: "6px", color: "white" }}>{q} Articles</h3>
      <div className='container'>
        <div className='row'>
          {
            articles.map((item, index) => {
              return <Newsitem key={index}
                source={item.source.name}
                description={item.description}
                url={item.url}
                pic={item.urlToImage}
                date={item.publishedAt}


              />

            })

          }


        </div>
      </div>

    </>
  )
}
