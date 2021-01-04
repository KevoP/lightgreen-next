export const dateToLocale = (dateString, locale = "en-IE") => {
   
   try {
      const date = new Date(dateString);
      const niceDate = new Intl.DateTimeFormat(locale).format(date);
      return niceDate;
   } catch (error) {
      console.log(error);
   }

   return false;
}