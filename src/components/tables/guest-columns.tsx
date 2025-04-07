import { ColumnDef } from "@tanstack/react-table";

const generateEventMessage = (
  title: string = "Akad",
  date: string = "06 Mei 2023",
  time: string = "15.00 WIB",
  location: string = `Agave Hall, The Flavor Bliss
  Jl. Alam Sutera Boulevard No. 29, Pakulonan,
  Kec. Serpong Utara, Kota Tangerang Selatan, Banten`
) => {
  return `${title}
  📅 Tanggal: ${date}
  🕒 Jam: ${time}
  📍 Tempat: ${location}`;
};

const events = [
  {
    title: "akad",
    date: "06 Mei 2023",
    time: "15.00 WIB",
    location: `Agave Hall, The Flavor Bliss
  Jl. Alam Sutera Boulevard No. 29, Pakulonan,
  Kec. Serpong Utara, Kota Tangerang Selatan, Banten`,
  },
  {
    title: "resepsi",
    date: "06 Mei 2023",
    time: "18.00 WIB",
    location: `Agave Hall, The Flavor Bliss
  Jl. Alam Sutera Boulevard No. 29, Pakulonan,
  Kec. Serpong Utara, Kota Tangerang Selatan, Banten`,
  },
];

const generateLink = (
  name: string,
  phoneNumber: number,
  url: string = "https://jilanfirza.kodetama.id/?to=d84642e0-0a17-11f0-b057-bc24119371da"
) => {
  const message = `Yth. ${name},
  
  Assalamualaikum wr. wb.
  
  Dengan rahmat dan ridho Allah, kami bermaksud untuk mengundang saudara/i, kerabat, dan teman-teman semua untuk hadir dan memberikan doa restu dalam acara pernikahan kami,
  
  Jilan Falihah &
  Firza Gustama
  
  Detil acara pada link:
  ${url}
  
  ${events.map((event) =>
    generateEventMessage(event.title, event.date, event.time, event.location)
  )}
  
  Mohon kesediaan Bapak/Ibu untuk dapat mengkonfirmasi kehadirannya pada link yang telah kami cantumkan.
  
  Besar harapan kami atas kehadiran Bapak/Ibu, semoga kehadiran dan doa restu Anda dapat membawa kebahagiaan dan keberkahan untuk pernikahan kami. 
  
  Terima kasih kami ucapkan atas perhatian dan doanya.
  
  Wassalamualaikum wr. wb.`;

  return `https://api.whatsapp.com/send/?phone=${encodeURI(
    `${phoneNumber}`
  )}&text=${encodeURI(message)}&type=phone_number&app_absent=0`;
};

export type Guest = {
  id: string;
  name: string;
  phone_number: number;
  invitation_status:
    | "not delivered"
    | "delivered"
    | "opened"
    | "attend"
    | "not attend";
};

export const columns: ColumnDef<Guest>[] = [
  {
    accessorKey: "name",
    header: "Guest Name",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "invitation_status",
    header: "Status",
  },
  {
    id: "whatsapp",
    header: "Send",
    cell: ({ row }) => {
      const guest = row.original;

      return (
        <a
          href={generateLink(
            guest.name,
            guest.phone_number,
            `https://jilanfirza.kodetama.id/?to=${guest.id}`
          )}
          target="_blank"
        >
          Send
        </a>
      );
    },
  },
];
