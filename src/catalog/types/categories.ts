type Category = {
  id: number;
  parentId: number;
  priority: number;
  name: string;
  image: {
    alt: string;
    urls: string[];
    width: number[];
    height: number[];
  };
  slug: string;
};

export type CategoryInput = Category[];

export type PrimaryCategory = Omit<Category, 'imageUrl' | 'parentId'>;

export type SecondaryCategory = Category;
