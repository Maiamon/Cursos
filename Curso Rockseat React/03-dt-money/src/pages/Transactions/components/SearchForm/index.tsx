import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/**
 * Por que que um componente renderiza?
 * - hooks changed (useState, useEffect, useContext, etc)
 * - props changed (props)
 * - parent render (parent)
 * 
 * Qual o fluxo de renderização
 * 1. O React recria o HTML da interface daquele componente
 * 2. Compara com o HTML anterior
 * 3. Se houver diferença, ele reescreve o HTML
 * 
 * Memo:
 * 0. Hooks changed, props changed (deep comparison)
 * 0.1: Comparar a versão anterior dos hooks e props
 * 0.2: Se mudou algo, ele vai permitir a nova rendereização
 */


const searchFormSchema = zod.object({
  query: zod.string()
});

type searchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions;
  });

  const { 
    register, 
    handleSubmit,
    formState: { 
      isSubmitting
    }
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data : searchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer  onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
        </button>
    </SearchFormContainer>
  )
}