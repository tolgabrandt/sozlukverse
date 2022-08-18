import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import { Search } from "react-bootstrap-icons";

export function SearchBar({ handleSubmit, status }) {
  return (
    <>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values) => {
          handleSubmit();
        }}
      >
        <Form className="flex relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none  ">
            <Search />
          </div>
          <Field
            id="default-search"
            name="title"
            type="text"
            placeholder="başlık ara"
            className={classNames(status, "pl-10 w-full")}
          ></Field>
        </Form>
      </Formik>
    </>
  );
}
