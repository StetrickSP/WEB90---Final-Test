// Set the type of data

export type Creation = {
  id: number;
  user_id: string;
  prompt: string;
  content: string;
  type: string;
  publish: boolean;
  likes: any[];
  created_at: string;
  updated_at: string;
};
