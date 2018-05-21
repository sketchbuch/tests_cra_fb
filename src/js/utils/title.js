// @flow


/**
* Sets the window title.
*
* @param string titleTxt The text to used as the window title.
*/
export default function setTitle(titleTxt: string) {
  const trimmedTxt = titleTxt.trim();

  if (trimmedTxt === '') {
    document.title = window.app.defaultTitle;
  } else {
    document.title = `${trimmedTxt} - ${window.app.defaultTitle}`;
  }
}
