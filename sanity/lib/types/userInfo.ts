export interface UserInfo {
  _id: string
  title: string
  name: string
  surname: string,
  summary:string,
  cv: {
    url: string
  }
  githubUrl:string,
  linkedInUrl:string,
}
