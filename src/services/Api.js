import Request from "./RequestConfig";

export default class Api {
  static fetchSubjects() {
    return Request.get("subjects");
  }
}
