import dayjs from "dayjs";
import { Form, Formik } from "formik";
import { checkmark, close } from "ionicons/icons";
import * as yup from "yup";

import {
  IonButton,
  IonCheckbox,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  IonSpinner,
  IonText,
  IonTextarea,
  useIonToast,
} from "@ionic/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Task } from "../../../Interfaces/ITask";
import {
  editTaskWithIndex,
  getTaskByIndex,
} from "../../../Services/tasks.services";

const editTaskValidationScheme = yup.object({
  name: yup.string().required("A Name is required"),
  personalNote: yup.string(),
  isDone: yup.boolean(),
});

interface EditTaskFormProps {
  id: string;
}

const EditTaskForm = ({ id }: EditTaskFormProps) => {
  const queryClient = useQueryClient();

  const [present] = useIonToast();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTaskByIndex(parseInt(id)),
  });

  return (
    <>
      {isLoading && <IonSpinner></IonSpinner>}
      {isSuccess && data && (
        <Formik
          initialValues={{
            name: data.name,
            personalNote: data.personalNote,
            startDate: dayjs(data.startDate).toDate(),
            endDate: dayjs(data.endDate).toDate(),
            isDone: data.isDone,
          }}
          validationSchema={editTaskValidationScheme}
          onSubmit={async (toEditTask: Task) => {
            editTaskWithIndex(toEditTask, parseInt(id));

            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            queryClient.removeQueries({ queryKey: ["task", id] });

            present({
              message: `Task ${toEditTask.name} was edited`,
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
            <div>
              <Form>
                <IonGrid>
                  <IonRow>
                    <IonCol sizeXs="12" sizeSm="8" offsetXs="0" offsetSm="2">
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
                    <IonCol sizeXs="12" sizeSm="8" offsetXs="0" offsetSm="2">
                      <IonTextarea
                        id="personalNote"
                        fill="solid"
                        name="personalNote"
                        label="Personal Note (optional)"
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
                    <IonCol sizeXs="12" offsetXs="0" sizeSm="4" offsetSm="2">
                      <IonInput
                        className={`${
                          formikProps.errors.startDate &&
                          formikProps.touched.startDate &&
                          "ion-invalid ion-touched"
                        } `}
                        id="startDate"
                        type="datetime-local"
                        fill="solid"
                        name="startDate"
                        label="Start Date (optional)"
                        labelPlacement="floating"
                        value={dayjs(formikProps.values.startDate).format(
                          "YYYY-MM-DDTHH:mm:00"
                        )}
                        onIonChange={formikProps.handleChange}
                        onIonBlur={formikProps.handleBlur}
                      ></IonInput>
                      {formikProps.errors.startDate &&
                        formikProps.touched.startDate && (
                          <div className="ion-padding-top ion-padding-start">
                            <IonText color="danger">
                              {formikProps.errors.startDate}
                            </IonText>
                          </div>
                        )}
                    </IonCol>
                    <IonCol sizeXs="12" offsetXs="0" sizeSm="4">
                      <IonInput
                        className={`${
                          formikProps.errors.endDate &&
                          formikProps.touched.endDate &&
                          "ion-invalid ion-touched"
                        } `}
                        id="endDate"
                        type="datetime-local"
                        fill="solid"
                        name="endDate"
                        label="End Date (optional)"
                        labelPlacement="floating"
                        value={dayjs(formikProps.values.endDate).format(
                          "YYYY-MM-DDTHH:mm:00"
                        )}
                        onIonChange={formikProps.handleChange}
                        onIonBlur={formikProps.handleBlur}
                      ></IonInput>
                      {formikProps.errors.endDate &&
                        formikProps.touched.endDate && (
                          <div className="ion-padding-top ion-padding-start">
                            <IonText color="danger">
                              {formikProps.errors.endDate}
                            </IonText>
                          </div>
                        )}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol
                      sizeXs="12"
                      offsetXs="0"
                      sizeSm="8"
                      offsetSm="2"
                      className="ion-padding-top ion-padding-bottom"
                    >
                      <IonCheckbox
                        labelPlacement="end"
                        id="isDone"
                        name="isDone"
                        checked={formikProps.values.isDone}
                        onIonChange={(e) =>
                          formikProps.setFieldValue("isDone", e.target.checked)
                        }
                        onIonBlur={formikProps.handleBlur}
                      >
                        Task Done?
                      </IonCheckbox>
                      {formikProps.errors.isDone &&
                        formikProps.touched.isDone && (
                          <div className="ion-padding-top ion-padding-start">
                            <IonText color="danger">
                              {formikProps.errors.isDone}
                            </IonText>
                          </div>
                        )}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol sizeXs="12" sizeSm="8" offsetXs="0" offsetSm="2">
                      <IonButton type="submit">Save</IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditTaskForm;
