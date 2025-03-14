import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome'])
});

type NewTransactionInputs = zod.infer<typeof newTransactionSchema>;

export function NewTransactionModal(){
  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  });

  const {
    control,
    register,
    handleSubmit,
    formState: {
      isSubmitting
    },
    reset,
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income'
    }
  });

  async function handleCreateNewTransaction(data: NewTransactionInputs){
    const { description, price, category, type } = data;

    await createTransaction(
      {
        description,
        price,
        category,
        type
      }
    )

    reset();
  }


  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>


        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder='Descrição' 
            required
            {...register('description')}
          />
          <input 
            type="number" 
            placeholder='Preço' 
            required
            {...register('price', {valueAsNumber: true})}
          />
          <input 
            type="text"
            placeholder='Categoria' 
            required
            {...register('category')}
          />

          <Controller 
            control={control}
            name='type'
            render={({ field }) => {
              return(
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton value='income' variant='income'>
                    <ArrowCircleUp size={24}/>
                    Entrada
                  </TransactionTypeButton>
      
                  <TransactionTypeButton value='outcome' variant='outcome'>
                    <ArrowCircleDown size={24}/>
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>
    
      </Content>
    </Dialog.Portal>
  )
}