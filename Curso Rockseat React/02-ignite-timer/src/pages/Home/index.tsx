import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import * as zod from "zod";

import { 
  HomeContainer, 
  StartCountdownButton, 
  StopCountdownButton, 
} from "./styles";
import { NewCycleForm } from "./Components/NewCycleForm";
import { CountDown } from "./Components/CountDown";
import { CyclesContext } from "../../contexts/CyclesContext";
import { useContext } from "react";


/**
 *  function register(name: string) {
 *    onchange: () => void;
 *    onBlur: () => void;
 *    onFocus: () => void;
 *  }
 */



// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
  .min(5, "O tempo mínimo é de 5 minutos")
  .max(60, "O tempo máximo é de 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, reset, watch } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const inSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">     
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

      { activeCycle ? (
        <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
          <HandPalm size={24} />
          Interromper
        </StopCountdownButton>
      ) : (
        <StartCountdownButton disabled={inSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      )}
      </form>
    </HomeContainer>
  );
}
