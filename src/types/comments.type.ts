export interface Comment {
  id: number;
  text: string;
  timestamp: string;
}

/** Тело для API POST запроса */
export interface CommentBody {
  text: string;
  timestamp: string;
}
