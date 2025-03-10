# EVT

[Открыть лабораторные работы](https://SHURypIK.github.io/EVT/)

# Бабич Александр

## Java разработчик

- **E-mail:** aleksandrbabich05by@gmail.com
- **Phone:** +375(29) 860-21-83
- **Telegram:** @shurypik
- **LinkedIn:** [linkedin.com/in/aleksandr-bablch](https://linkedin.com/in/aleksandr-bablch)
- **GitHub:** [github.com/SHURypIK](https://github.com/SHURypIK)

## Обо мне

_Привет_

![Начинающий Java разработчик](image.png)

Начинающий Java разработчик, ищу работу, которая позволит приобрести опыт в данной сфере. Не боюсь общения с людьми, как и трудностей в процессе разработки. Готов пахать как лошадь и быстро латать дырки в навыках.

## Навыки

- _Java SE_
- _JavaFX_
- _Spring_
- _Hibernate_
- _Gradle_
- _Lombok_
- _SQL_
- _Git_
- Знание принципов и паттернов разработки
- Английский – B1-B2

## Опыт

### Курсовой проект на тему “Клиент-серверное приложение по управлению общежитием” – декабрь 2024, БГУИР

- Разработал и реализовал:
  - Сервер с использованием Spring Framework
  - Клиентское десктоп приложение на JavaFX с использованием библиотек Lombok, Google Gson, Apache HttpClient.

### Студенческий хакатон – апрель 2024, БГИУР

**Backend разработчик**

- Принимал участие в разработке идеи и реализации проекта
- Создал большую часть сервера для веб-ресурса с мероприятиями университета.
- Использовал Git для совместной работы над кодом и Miro для коммуникации.

Заняли 1 место.

### Курсовой проект на тему “Интернет магазина атрибутики музыкальной группы” – декабрь 2024, БГУИР

- Собственноручно был разработан и создан REST API:
  - Сервер был написан на основе Spring
  - Клиент – динамический веб-сайт с использованием JavaScript

## Образование

| Год              | Учебное заведение | Специальность         |
| ---------------- | ----------------- | --------------------- |
| 2022 – настоящее | БГУИР             | Инженер-системотехник |

## Пример кода: Пузырьковая сортировка на Java

```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Меняем arr[j] и arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // Если не было обменов, массив отсортирован
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Отсортированный массив:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```
