import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Data } from '../interfaces/gifs.interface'

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  private _historial: string[] = []
  private apiKey: string = "upRFsiCqVpPoW9OoetZRhewwMj1p7ZCZ"
  public resultados: Data[] = []
  private limit: number = 10
  private baseUrl: string = "https://api.giphy.com/v1/gifs"

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  get historial() { return [...this._historial] }

  buscarGifs(searchValue: string) {
    if (!searchValue.trim())
      return

    searchValue = searchValue.trim().toLowerCase()

    const i = this.historial.findIndex(v => v === searchValue)
    if (i !== -1)
      this._historial.splice(i, 1)

    if (this._historial.length > 9)
      this._historial.pop()

    this._historial.unshift(searchValue)
    localStorage.setItem('historial', JSON.stringify(this._historial))

    const params = new HttpParams().set('api_key', this.apiKey)
      .set('q', searchValue)
      .set('limit', this.limit.toString())

    const url = `${this.baseUrl}/search`

    this.http.get<SearchGifsResponse>(url, { params })
      .subscribe((resp) => {
        this.resultados = resp.data
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })
  }
}
