// @flow

/**
* Post type def.
*/

export type PostType = {
  body: string,
  created: number,
  id: string,
  title: string,
  updated: number,
};

const postDefault: PostType = {
  body: '',
  created: -1,
  id: '',
  title: '',
  updated: -1,
};

export const postSort = ['title', 'updated'];

/**
* Returns an object of PostType based on postObj but with additional props set.
*
* @param {PostType} postObj The initial post object.
* @param {string} id The id for the object.
* @param {number} ts A timestamp used for the id, created, and updated.
* @return {PostType} The new post object.
*/
export function PostFactory(postObj: PostType, id: string, ts: number): PostType {
  const newObj ={
    ...postObj,
    created: ts,
    id: id,
    updated: ts,
  };

  return newObj;
}


export default postDefault;
