import { Form, Formik } from "formik";
import { checkmark, close } from "ionicons/icons";
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
  useIonToast,
} from "@ionic/react";
import { useQueryClient } from "@tanstack/react-query";

import { Task } from "../../../Interfaces/ITask";
import { addTask } from "../../../Services/tasks.services";

const addTaskValidationScheme = yup.object({
  name: yup.string().required("Give your Task a Name. I believe in you 🙂"),
  personalNote: yup.string(),
});

const AddTaskForm = () => {
  const queryClient = useQueryClient();

  const [present] = useIonToast();

  return (
    <Formik
      initialValues={{ name: "", personalNote: "" }}
      validationSchema={addTaskValidationScheme}
      onSubmit={async (toAddTask: Task) => {
        toAddTask.isDone = false;

        await addTask(toAddTask);

        queryClient.invalidateQueries({
          queryKey: ["tasks"],
          refetchType: "all",
        });

        present({
          message: `Task ${toAddTask.name} was added`,
          duration: 5000,
          position: "bottom",
          buttons: [{ role: "cancel", icon: close }],
          icon: checkmark,
          color: "success",
        });

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
