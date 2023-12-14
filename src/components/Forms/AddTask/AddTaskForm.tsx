import { Form, Formik } from "formik";
import * as yup from "yup";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonText,
  IonTextarea,
} from "@ionic/react";

import { Task } from "../../../Interfaces/ITask";
import { addTask } from "../../../Services/tasks.services";

const addTaskValidationScheme = yup.object({
  name: yup.string().required("Give your Task a Name. I believe in you 🙂"),
  personalNote: yup.string(),
});

const AddTaskForm = () => {
  return (
    <Formik
      initialValues={{ id: 0, name: "", personalNote: "" }}
      validationSchema={addTaskValidationScheme}
      onSubmit={(taskValues: Task) => {
        taskValues.isDone = false;

        addTask(taskValues);

        history.go(-1);
      }}
    >
      {(formikProps) => (
        <IonContent>
          <Form>
            <IonGrid>
              <IonRow>
                <IonCol sizeXs="12" sizeSm="6" offsetXs="0" offsetSm="3">
                  <IonInput
                    className={`${
                      formikProps.errors.name &&
                      formikProps.touched.name &&
                      "ion-invalid ion-touched"
                    } `}
                    id="name"
                    type="text"
                    fill="solid"
                    name="name"
                    label="Task Name"
                    labelPlacement="floating"
                    value={formikProps.values.name}
                    onIonChange={formikProps.handleChange}
                    onIonBlur={formikProps.handleBlur}
                  ></IonInput>
                  {formikProps.errors.name && formikProps.touched.name && (
                    <div className="ion-padding-top ion-padding-start">
                      <IonText color="danger">
                        {formikProps.errors.name}
                      </IonText>
                    </div>
                  )}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol sizeXs="12" sizeSm="6" offsetXs="0" offsetSm="3">
                  <IonTextarea
                    id="personalNote"
                    fill="solid"
                    name="personalNote"
                    label="Personal Note"
                    labelPlacement="floating"
                    autoGrow
                    value={formikProps.values.personalNote}
                    onIonChange={formikProps.handleChange}
                    onIonBlur={formikProps.handleBlur}
                  ></IonTextarea>
                  {formikProps.errors.personalNote &&
                    formikProps.touched.personalNote && (
                      <div className="ion-padding-top ion-padding-start">
                        <IonText color="danger">
                          {formikProps.errors.personalNote}
                        </IonText>
                      </div>
                    )}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol sizeXs="12" sizeSm="6" offsetXs="0" offsetSm="3">
                  <IonButton type="submit">Speichern</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </Form>
        </IonContent>
      )}
    </Formik>
  );
};

export default AddTaskForm;
