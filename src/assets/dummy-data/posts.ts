export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Thread {
  id: number;
  category_id: number;
  name: string;
  description: string;
}

export interface Post {
  id: number;
  author_id: number;
  thread_id: number;
  content: string;
}

export const dummyCategories: Category[] = [
  {
    id: 1,
    name: 'Trade District',
    description:
      'This is where local trade takes place. An ideal cover for illegal activity.',
  },
  {
    id: 2,
    name: 'Entertainment District',
    description:
      "The most popular part of town. Frequented by people with a wide variety of backgrounds. Do check your drinks if you know what's good for you.",
  },
  {
    id: 3,
    name: 'Industrial District',
    description:
      "The least visited part of town. Even the cops don't slow down passing through.",
  },
];

export const dummyThreads: Thread[] = [
  {
    id: 1,
    category_id: 1,
    name: 'Shopping Mall',
    description:
      'You will most likely find what you are looking for here. Within reason that is.',
  },
  {
    id: 2,
    category_id: 1,
    name: 'Bazaar',
    description:
      'Less flashy than the mall and much more seedy. Keep your eyes open.',
  },
  {
    id: 3,
    category_id: 2,
    name: 'Hive',
    description:
      'For those much more daring than most or much too careless for their own good. Either way someone is gonna have fun.',
  },
  {
    id: 4,
    category_id: 2,
    name: 'The Rose',
    description: 'For those of higher class looking for more carnal pleasures.',
  },
  {
    id: 5,
    category_id: 3,
    name: 'Junkyard',
    description:
      'God knows what could be found here if someone went looking. Good thing nobody has a deathwish.',
  },
  {
    id: 6,
    category_id: 3,
    name: 'Factory',
    description:
      'They say it produces steel tools, but some have their doubts. Not that it matters.',
  },
];

export const dummyPosts: Post[] = [
  {
    id: 1,
    author_id: 1,
    thread_id: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sapien eu massa porta fringilla. Aenean condimentum fermentum elit, ac mattis dolor varius eget. Mauris eu aliquam felis. Maecenas convallis porta euismod. Fusce posuere lacus in ex elementum, ac rhoncus erat ultrices. Suspendisse vehicula scelerisque consequat.',
  },
  {
    id: 2,
    author_id: 2,
    thread_id: 1,
    content:
      'Maecenas dictum lectus non magna pretium, in mattis purus dapibus. Pellentesque vestibulum dolor at est sodales, eget molestie ante dictum. Aliquam placerat lorem mi, quis varius urna blandit vitae. Fusce sodales interdum nulla ut pretium. Fusce auctor id est imperdiet sollicitudin.',
  },
  {
    id: 3,
    author_id: 1,
    thread_id: 2,
    content:
      'Cras nec arcu blandit, auctor quam laoreet, malesuada ex. Integer nec blandit enim, vitae consequat tortor. Donec a mattis lectus. In non tellus ligula.',
  },
  {
    id: 4,
    author_id: 2,
    thread_id: 2,
    content:
      'Pellentesque vehicula venenatis purus, nec pharetra felis dapibus non. Curabitur magna quam, varius ut diam vel, sollicitudin commodo dui. Curabitur massa ligula, mattis eu convallis in, volutpat sit amet nunc. In nec ullamcorper ante.',
  },
  {
    id: 5,
    author_id: 1,
    thread_id: 3,
    content:
      'Curabitur laoreet arcu dolor, ac pharetra nisl venenatis vitae. In at turpis ultricies, fringilla nunc quis, consequat risus. Sed massa mi, molestie laoreet arcu et, gravida consectetur purus. Sed pellentesque lacinia pellentesque. Duis ornare sodales tincidunt.',
  },
  {
    id: 6,
    author_id: 2,
    thread_id: 3,
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tempor odio sed bibendum volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 7,
    author_id: 1,
    thread_id: 4,
    content:
      'Donec sit amet risus vel sem commodo congue id non sem. Maecenas ipsum ipsum, tristique sit amet dapibus eget, pretium ac tortor. Suspendisse fringilla eu turpis ut gravida. Quisque vitae fringilla justo. Morbi sagittis porttitor nibh, in viverra risus cursus quis. Donec rhoncus, nulla semper laoreet aliquet, enim leo luctus arcu, in dictum lorem tellus in leo.',
  },
  {
    id: 8,
    author_id: 2,
    thread_id: 4,
    content:
      'In vel dapibus diam, non sodales est. Integer vehicula lacinia lacus, pulvinar consequat urna pellentesque in. Vivamus sit amet euismod magna. Sed vel quam a dolor blandit molestie.',
  },
];
