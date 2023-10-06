interface CommentModel {
  placeholder: string,
  text: string
}

interface BubbleModel {
  title: string,
  isSelected: boolean
  id: string
  comment: CommentModel
}

export interface QuestionModel {
  question: string;
  answer: string;
  text: string;
  bubbles: Array<BubbleModel>;
}
