def day_num_from_name(day_name):
    return "ZERO Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split().index(day_name)

day_num = day_num_from_name("Sunday")