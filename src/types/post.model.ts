import { type GitHubUser } from './githubUser.model'

export interface Post {
  id: string
  created_at: string
  content: string
  user_id: string
  users: GitHubUser
}
