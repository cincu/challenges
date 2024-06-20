import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>
        Hello {data.firstName} {data.lastName}
      </h1>
      <p>this is your last chance to recover your {data.twitter} account</p>
      <p>please proof that your age is {data.age}</p>
      <p>please proof that your profession is {data.profession}</p>
      <p>
        define what your favorite animal is e.g. ({data.pet}) and your favorite
        day in the week e.g. ({data.favoriteDayInWeek})
      </p>
    </div>
  );
}
