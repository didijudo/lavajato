package br.com.Lavajato;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.TimeZone;

public class Util {

    public static String getDataFormatada(Calendar data) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        return data == null ? "" : sdf.format(data.getTime());
    }

    public static Calendar agora() {
        return Calendar.getInstance(TimeZone.getTimeZone("America/Maceio"));
    }

    public static Calendar converterDataStringParaCalendar(String data) {
        if (data == null || data.isEmpty())
            return null;

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Calendar dt = Calendar.getInstance();
        try {
            dt.setTime(sdf.parse(data));
        } catch (ParseException e) {
            System.out.println(e.getMessage());
        }

        return getDataComHoraZerada(dt);
    }

    public static Calendar converterDataUSAParaCalendar(String data) {
        if (data == null || data.isEmpty())
            return null;

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar dt = Calendar.getInstance();
        try {
            dt.setTime(sdf.parse(data));
        } catch (ParseException e) {
            System.out.println(e.getMessage());
        }

        return getDataComHoraZerada(dt);
    }

    public static Calendar getDataComHoraZerada(Calendar data) {
        data.set(Calendar.HOUR_OF_DAY, 0);
        data.set(Calendar.MINUTE, 0);
        data.set(Calendar.SECOND, 0);
        data.set(Calendar.MILLISECOND, 0);

        return data;
    }

    public static Calendar getDataUltimoMinutoDoDia(Calendar data) {
        Calendar dt = Calendar.getInstance();
        dt.setTime(data.getTime());

        dt.set(Calendar.HOUR_OF_DAY, 23);
        dt.set(Calendar.MINUTE, 59);
        dt.set(Calendar.SECOND, 59);
        dt.set(Calendar.MILLISECOND, 0);

        return dt;
    }

    public static Calendar hoje() {
        return getDataComHoraZerada(Calendar.getInstance());
    }
}
