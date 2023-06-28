type User = {
  title: string;
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

type News = {
 
 
        
          __typename: string;
          id: number;
          type: string;
          headline: string;
          shorterHeadline: string;
          description: string;
          pageName: string;
          relatedTagsFilteredFormatted: string;
          dateFirstPublished: string;
          sectionHierarchyFormatted: string;
          authorFormatted: string;
          shortDateFirstPublished: string;
          shortDateLastPublished: Date;
          url: string;
          dateLastPublished: string;
          premium: false;
          promoImage: {
            __typename: string;
            id: number;
            url: string;
          };
          section: {
            __typename: string;
            id: number;
            shortestHeadline: string;
            tagName: string;
            url: string;
            premium: boolean;
          };
          featuredMedia: null;
          duration: number;
          playbackURL: string;
          vcpsId: number;
    
    
  
};
