export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  acf?: Record<string, any>;
}

export interface WordPressPage extends Omit<WordPressPost, 'categories' | 'tags'> {
  parent: number;
  menu_order: number;
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WordPressTag extends Omit<WordPressCategory, 'parent'> {}

export interface WordPressMedia {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  source_url: string;
  alt_text: string;
  caption: {
    rendered: string;
  };
  description: {
    rendered: string;
  };
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: Record<string, {
      file: string;
      width: number;
      height: number;
      mime_type: string;
      source_url: string;
    }>;
  };
}

export interface WordPressForm {
  id: number;
  title: string;
  fields: Array<{
    id: number;
    type: string;
    label: string;
    required: boolean;
    choices?: Array<{
      value: string;
      label: string;
    }>;
  }>;
  settings: {
    submit_text: string;
    success_message: string;
  };
} 