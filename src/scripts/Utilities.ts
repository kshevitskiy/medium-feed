import moment from 'moment'

class Utilities {

    moment(date: string, format: string = 'MMM Do, YYYY') {
      let m = moment(date).format(format);
      return m;
    }

    slugify(str: string, separator: string = '-') {
      str = str.trim();
      str = str.toLowerCase();

      const from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
      const to = "aaaaaaeeeeiiiioooouuuunc------";

      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      return str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes
        .replace(/^-+/, "") // trim - from start of text
        .replace(/-+$/, "") // trim - from end of text
        .replace(/-/g, separator);
    }
}

export default new Utilities()