class RequestService {

  async getRequest(url: string){
    const data = await (await (fetch(url)
      .then(response => {
        return response.json()
      })
      .catch(error => {
        console.log('Error: ', error)        
      })
    ))

    return data
  }
}

export default new RequestService()